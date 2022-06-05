extern crate custom_derive;
use custom_derive::hello_macro;

#[derive(hello_macro)]
pub(crate) struct MySelf {
    name: String,
    age: u8,
}

#[cfg(test)]
mod tests {
    #[test]
    fn test_sync() {
        use crate::syn_quote_example::MySelf;
        let me = MySelf {
            name: String::from("sz"),
            age: 18,
        };
    }
}