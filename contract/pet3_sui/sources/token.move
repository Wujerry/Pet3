module pet3_sui::pet3_token {

	use sui::coin::{Self, TreasuryCap};

    public struct PET3_TOKEN has drop {}
    
    fun init(witness: PET3_TOKEN, ctx: &mut TxContext) {
        let (treasury, metadata) = coin::create_currency(witness, 6, b"PET", b"PET3", b"pet3 token", option::none(), ctx );        
        transfer::public_freeze_object(metadata);
        transfer::public_transfer(treasury, tx_context::sender(ctx));
    }     

    public entry fun mint(
        treasury_cap: &mut TreasuryCap<PET3_TOKEN>,
        amount: u64,
        recipient: address,
        ctx: &mut TxContext
    ) {
        let coin = coin::mint(treasury_cap, amount, ctx);
        transfer::public_transfer(coin, recipient);
    }
}