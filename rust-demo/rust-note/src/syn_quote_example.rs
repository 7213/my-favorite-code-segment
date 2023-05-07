extern crate custom_derive;

#[cfg(test)]
mod tests {
    #[test]
    fn test_sync() {
        use custom_derive::hello_macro;

        #[derive(hello_macro)]
        pub(crate) struct MySelf {
            name: String,
            age: u8,
        }

        let me = MySelf {
            name: String::from("sz"),
            age: 18,
        };
        me.say_hello();
    }
}