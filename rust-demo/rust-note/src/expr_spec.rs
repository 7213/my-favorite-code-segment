pub(crate) enum Score{
    A,
    B,
    C,
}

#[cfg(test)]
mod tests {
    #[test]
    fn block_expr() {
        let foo = {
            println!("我是语句");
            1
        };
        println!("foo的值是 {}", foo);
    }
    #[test]
    fn  match_expr() {
        use crate::expr_spec::Score;

        let my_score = Score::C;

        let rank = match my_score {
            Score::A => "你是第一名",
            Score::B => "你是第二名",
            _ => "请继续加油"
        };

        println!("你的排名: {}", rank);

    }
}
