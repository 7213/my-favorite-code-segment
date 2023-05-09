fn generate_workout(intensity: u32, random_number: u32) {
    let expensive_closure = |num| {
        println!("calculating slowly...");
        thread::sleep(Duration::from(2));
        num
    }
}


fn main() {
    println!("Hello, world!");
}
