use proc_macro::TokenStream;
use quote::quote;
use syn::{DeriveInput, parse_macro_input};

#[proc_macro_derive(hello_macro)]
pub fn hello_macro(input: TokenStream) -> TokenStream {
    // Parse the tokens into a syntax tree
    let ast = parse_macro_input!(input as DeriveInput);
    let ident = ast.ident;

    // Build the output, possibly using quasi-quotation
    let expanded = quote! {
        trait Hello {
            fn say_hello(&self) {
                println!("{}", "hello_word2")
            }
        }
        impl Hello for #ident {};
    };
    // Convert into a token stream and return it
    expanded.into()
}
