//! Rust实现的 Virtual Dom

use crate::events::{
    AnyEvent,
};

use std::{
    cell::{Cell, RefCell},
    fmt::{Arguments, Debug, Formatter},
};

use bumpalo::{boxed::Box as BumpBox, Bump};

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

pub struct VElement<'a> {
    pub id: Cell<Option<ElementId>>,

    pub key: Option<&'a str>,

    pub tag: &'static str,

    pub namespace: Option<&'static str>,

    pub parent: Cell<Option<ElementId>>,

    pub listeners: &'a [Listener<'a>],

}

pub struct Listener<'bump> {
    pub owned_vnode: Cell<Option<ElementId>>,

    pub event: &'static str,

    pub(crate) callback: InternalHandler<'bump>,
}

pub struct Attribute<'a> {
    pub name: &'static str,

    pub value: &'a str,
}

pub type InternalHandler<'bump> = &'bump RefCell<Option<InternalListenerCallback<'bump>>>;
type InternalListenerCallback<'bump> = BumpBox<'bump, dyn FnMut(AnyEvent) + 'bump>;

type ExternalListenerCallback<'bump, T> = BumpBox<'bump, dyn FnMut(T) + 'bump>;
