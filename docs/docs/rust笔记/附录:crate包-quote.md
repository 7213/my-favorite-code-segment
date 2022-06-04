# 实用Crate包：syn和quote

## 介绍
- syn的作用是将Rust源码对应的Tokens流解析为语法树，Token就是一个有意义的词法单元
- quote的作用和Sync相反，它主要将语法树转换为Rust源码对应的Tokens流，从而在编译阶段修改原来的源码，实现了Rust的*元编程*

因为以上的作用syn常被用来解析原有源码，quote被用来输出目标源码，来实现过程宏

## 用法 
### syn
// todo