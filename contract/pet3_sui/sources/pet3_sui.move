
/// Module: pet3_sui
module pet3_sui::pet3 {
use std::string::{String, utf8};
	  use sui::package;
	  use sui::display;
	  use sui::table::{Self, Table};
	  use sui::event;
		use sui::random::Random;
  	use sui::random;
    use sui::balance;
    use sui::balance::{Balance, zero};
    use sui::coin;
    use sui::coin::{into_balance, from_balance};
		use pet3_sui::pet3_token::PET3_TOKEN;

    const MAX_SUPPLY: u64 = 10;

		const ENotEnoughSupply: u64 = 0;
		const EDontMintAgain: u64 = 1;

		public struct Pet3Pool has key {
        id: UID,
        pool: Balance<PET3_TOKEN>,
    }

    public struct AdminCap has key {
        id: UID,
    }

		public struct Pet3NFT has key, store {
    	id: UID,
    	nft_id: u64,
    	name: String,
    	image_url: String,
    	creator: address,
    	recipient: address,
		}
		

		public struct MintRecord has key {
			  id: UID,
			  record: Table<address, u64>,
		}

		public struct NFTMinted has copy, drop {
		    object_id: ID,
		    creator: address,
		    name: String,
		}

		public struct PET3 has drop {}

		fun init(otw: PET3, ctx: &mut TxContext) {
			let keys = vector[
			    utf8(b"name"),
			    utf8(b"description"),
			    utf8(b"image_url"),
			    utf8(b"creator"),
			];
			let values = vector[
				  utf8(b"{name} #{nft_id}"),
				  utf8(b"A NFT for Pet3"),
			    utf8(b"{image_url}"),
			    utf8(b"{creator}"),
			];
			let mint_record = MintRecord {
				  id: object::new(ctx),
			    record: table::new<address, u64>(ctx),
			};

		  let publisher = package::claim(otw, ctx);
			let mut display = display::new_with_fields<Pet3NFT>(&publisher, keys, values, ctx);
      let pool = Pet3Pool {
          id: object::new(ctx),
          pool: zero(),
      };
      let admin = AdminCap {
          id: object::new(ctx),
      };
			display::update_version(&mut display);

      transfer::transfer(admin, ctx.sender());
    	transfer::share_object(pool);
			transfer::public_transfer(publisher, ctx.sender());
			transfer::public_transfer(display, ctx.sender());
			transfer::share_object(mint_record);
	  }

		public entry fun mint(mint_record: &mut MintRecord, image_url: String, recipient: address, ctx: &mut TxContext) {
			assert!(!table::contains(&mint_record.record, recipient), EDontMintAgain);
			let nft_id: u64 = table::length(&mint_record.record) + 1;
			assert!(nft_id <= MAX_SUPPLY, ENotEnoughSupply);
			table::add(&mut mint_record.record, recipient, nft_id);
			let nft = Pet3NFT {
						id: object::new(ctx),
				    nft_id,
				    name: utf8(b"Pet3"),
				    image_url,
				    creator: ctx.sender(),
				    recipient,
				};
				event::emit(NFTMinted {
		      object_id: object::id(&nft),
		      creator: ctx.sender(),
		      name: nft.name,
		    });
				transfer::public_transfer(nft, recipient);
		}

		public entry fun burn(mint_record: &mut MintRecord, nft: Pet3NFT) {
			table::remove(&mut mint_record.record, nft.recipient);
			let Pet3NFT { id, nft_id: _, name: _, image_url: _, creator: _, recipient: _, } = nft;
			object::delete(id);
		}


		// claim PET3_TOKEN from the pool with counts adn random amount 
		entry fun claim_box(_: &AdminCap,pool: &mut Pet3Pool, recipient: address, counts: u64, rand: &Random, ctx: &mut TxContext) {
			let mut x = counts;
			let mut toSendValue = 0;
	    loop {
				if (x == 0) {
	            break 
	        };
	        x = x - 1;
				toSendValue = toSendValue + getRandomPoints(rand, ctx);
	    };
			let out_balance = balance::split(&mut pool.pool, toSendValue);
    	let out_coin = from_balance(out_balance, ctx);
      transfer::public_transfer(out_coin, recipient);
		}

		fun getRandomPoints(r: &Random, ctx: &mut TxContext): u64 {
    	random::generate_u64_in_range(&mut random::new_generator(r, ctx), 1000000, 10000000)
  	}

		// deposit PET3_TOKEN to the pool
    public entry fun deposit(
        pool: &mut Pet3Pool,
        in: coin::Coin<PET3_TOKEN>,
    ) {
        let in_balance = into_balance(in);
        balance::join(&mut pool.pool, in_balance);
    }

		// withdraw PET3_TOKEN from the pool
    public entry fun withdraw(_: &AdminCap, game: &mut Pet3Pool, amount: u64, ctx: &mut TxContext) {
        let out_balance = balance::split(&mut game.pool, amount);
        let out_coin = from_balance(out_balance, ctx);
        transfer::public_transfer(out_coin, ctx.sender());
    }

}

