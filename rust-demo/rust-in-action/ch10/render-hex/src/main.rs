
use crate::Operation::{             
    Forward,                          
    Home,                             
    Noop,                            
    TurnLeft,                        
    TurnRight                         
};  

const WIDTH: isize = 400;
const HEIGHT: isize = WIDTH;


#[derive(Debug, Clone, Copy)]
enum Operation {
    Forward(isize),
    TurnLeft,
    TurnRight,
    Home,
    Noop(usize),
}

fn parse(input: &str) -> Vec {
    let mut steps = Vec::new();
    for byte in input.bytes() {
        let step = match byte {
            b'0' => Home,
            b'1'..=b'9' => {
                let distance = (byte - 0x30) as isize;
                Forward(distance * (HEIGHT / 10))
            }
        }
    }

}




fn main() {
    let args = env::args().collect::<Vec<String>>();
    let input = args.get(1).unwrap();
    let default = format!("{}.svg", input);
    let save_to = args.get(2).unwrap_or(&default);    
}
