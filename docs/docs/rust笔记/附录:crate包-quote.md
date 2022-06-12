# 实用Crate包：syn和quote

## 介绍
- syn的作用是将Rust源码对应的Tokens流解析为语法树，Token是一个有意义的词法单元
- quote的作用和syn相反，它主要将语法树转换为Rust源码对应的Tokens流，从而在编译阶段修改原来的源码，实现了Rust的*元编程*

因为以上的作用syn常被用来解析原有源码，quote被用来输出目标源码，貌似现在几乎也只被来实现过程宏上。

## 用法 
首先我们搭建一个自定义过程宏的工程，和一个使用过程宏的工程

- 定义过程宏工程 [custom-derive](https://github.com/7213/my-favorite-code-segment/tree/main/rust-demo/rust-note/custom-derive) PS：过程宏和使用此宏的工程必须分开
- 使用过程宏 [syn_quote_example](https://github.com/7213/my-favorite-code-segment/blob/main/rust-demo/rust-note/src/syn_quote_example.rs)

### syn
// todo