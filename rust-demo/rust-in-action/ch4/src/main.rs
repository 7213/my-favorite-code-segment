
#[derive(Debug)]
enum StatusMessage {
    Ok,
}

type Message = String;

#[derive(Debug)]
struct CubeSat {
    id: u64,
    mailbox: Mailbox,
}
impl CubeSat {
    fn recv(&mut self) -> Option<Message> {
        self.mailbox.messages.pop()
    }
}

#[derive(Debug)]
struct Mailbox {
    messages: Vec<Message>,
}

struct GroundStation;
impl GroundStation {
    fn send(
        &self,
        to: &mut CubeSat,
        msg: Message,
    ) {
        to.mailbox.messages.push(msg);
    }
}

fn check_status(
    sat_id: CubeSat
) -> StatusMessage {
    StatusMessage::Ok
}

fn main() {
    let base = GroundStation {};
    let mut sat_a = CubeSat {
        id: 0,
        mailbox: Mailbox {
            messages: vec![],
        },
    };

    println!("t0: {:?}", sat_a);

    base.send(&mut sat_a, Message::from("hello there"));

    println!("t1: {:?}", sat_a);

    let msg = sat_a.recv();
    println!("t2: {:?}", sat_a);
    println!("msg: {:?}", msg);
}

