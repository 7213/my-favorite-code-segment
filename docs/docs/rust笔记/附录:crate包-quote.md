# 实用Crate包：syn和quote

## 介绍
- syn的作用是将Rust源码对应的Tokens流解析为语法树，Token是一个有意义的词法单元
- quote的作用和syn相反，它主要将语法树转换为Rust源码对应的Tokens流，从而在编译阶段修改原来的源码，实现了Rust的*元编程*

因为以上的作用syn常被用来解析原有源码，quote被用来输出目标源码，貌似现在几乎也只被来实现各种宏上。

## 用法 
首先我们搭建一个自定义过程宏的工程，和一个使用过程宏的工程

- 定义过程宏工程 [custom-derive](https://github.com/7213/my-favorite-code-segment/tree/main/rust-demo/rust-note/custom-derive) PS：过程宏和使用此宏的工程必须分开
- 使用过程宏 [syn_quote_example](https://github.com/7213/my-favorite-code-segment/blob/main/rust-demo/rust-note/src/syn_quote_example.rs)

### syn、quote 的大致使用框架
- 1.用 `parse_macro_input!` 将的过程宏作用的地方的源码的TokenStream转为语法树
- 2.用 `Data structures` 包含了Rust对应的终结符和非终结符的结构体，可以用它来方便的解构出你想要的语法树节点
- 3.用 `quote!` 在语法树上扩展你想要的行为，并将其再转换为TokenStream给Rust的编译流程

我们先写一个最简单的例子来练练手，创建一个过程宏`hello_macro`，为一个结构体添加hello_world方法

使用`hello_macro`宏
```rust
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
```

`hello_macro`宏的写法
```rust
#[proc_macro_derive(hello_macro)]
pub fn hello_macro(input: TokenStream) -> TokenStream {
    
    // 对应步骤1.将TokenStream转换成AST
    let ast = parse_macro_input!(input as DeriveInput);

    // 对应步骤2.从AST Node上提取信息
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
```

// todo
### syn重要的结构解析
#### AST Node节点类型
#### 模式在quote的应用