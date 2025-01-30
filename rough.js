Define the extensions to be used by the mint
const extensions = [
    ExtensionType.TransferFeeConfig,
    ExtensionType.MetadataPointer,
];

// Calculate the length of the mint
const mintLen = getMintLen(extensions);   

   const mintLamports = await connection.getMinimumBalanceForRentExemption(mintLen);
        const mintTransaction = new Transaction().add(  
            SystemProgram.createAccount({
                fromPubkey: payer.publicKey,
                newAccountPubkey: mint,
                space: mintLen,
                lamports: mintLamports,
                programId: TOKEN_2022_PROGRAM_ID,
            }),
            
            createInitializeTransferFeeConfigInstruction(
                mint,
                transferFeeConfigAuthority.publicKey,
                withdrawWithheldAuthority.publicKey,
                feeBasisPoints,
                maxFee,
                TOKEN_2022_PROGRAM_ID
            ),
            createInitializeMetadataPointerInstruction(
                mint,
                payer.publicKey,
                mint,
                TOKEN_2022_PROGRAM_ID
            ),
            createInitializeMintInstruction(mint, decimals, mintAuthority.publicKey, null, TOKEN_2022_PROGRAM_ID),
            createInitializeInstruction({
                programId: TOKEN_2022_PROGRAM_ID,
                mint: mint.publicKey,
                metadata: mint.publicKey,
                name: metadata.name,
                symbol: metadata.symbol,
                uri: metadata.uri,
                mintAuthority: payer.publicKey,
                updateAuthority: payer.publicKey,
            }),
        );
        const newTokenTx = await sendAndConfirmTransaction(connection, mintTransaction, [payer, mintKeypair], undefined);
        console.log("New Token Created:", generateExplorerTxUrl(newTokenTx));