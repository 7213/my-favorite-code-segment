use proc_macro::TokenStream;
use quote::quote;
use syn::DeriveInput;

#[proc_macro_derive(hello_macro)]
pub fn my_macro(input: TokenStream) -> TokenStream {
    // Parse the tokens into a syntax tree
    let ast: DeriveInput = syn::parse(input).unwrap();

    // Build the output, possibly using quasi-quotation
    let expanded = quote! {
        /* ... */
    };

    println!("{}", "过程宏插入");

    // Convert into a token stream and return it
    expanded.into()
}
