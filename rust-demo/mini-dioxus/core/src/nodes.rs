//! Rust实现的Virtual Dom

use std::{
    cell::{Cell, RefCell},
    fmt::{Arguments, Debug, Formatter},
};

pub enum VNode<'src> {
    Text(&'src VText<'src>),

    // Element(&'src VElement<'src>),

    // Component(&'src VComponent<'src>),

}

#[derive(Copy, Clone, PartialEq, Eq, Hash, Debug)]
pub struct ElementId(pub usize);

impl std::fmt::Display for ElementId {
    fn fmt(&self, f:&mut std::fmt::Formatter<'_>) -> std::fmt::Result { write!(f, "{}", self.0) }
}

impl ElementId {
    pub fn as_u64(self) -> u64 { self.0 as u64 }
}

fn empty_cell() -> Cell<Option<ElementId>> {
    Cell::new(None)
}

pub struct VText<'src> {
    pub id: Cell<Option<ElementId>>,

    pub text: &'src str,

    pub is_static: bool,

}
