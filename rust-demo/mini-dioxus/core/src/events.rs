use std::{any::Any, cell::Cell, fmt::Debug, rc::Rc, sync::Arc};
pub(crate) struct BubbleState {
    pub canceled: Cell<bool>,
}

impl BubbleState {
    pub fn new() -> Self {
        Self {
            canceled: Cell::new(false),
        }
    }
}

pub struct AnyEvent {
    pub(crate) bubble_state: Rc<BubbleState>,
    pub(crate) data: Arc<dyn Any + Send + Sync>,
}

impl AnyEvent {
    pub fn downcast<T: Send + Sync + 'static>(self) -> Option<UiEvent<T>> {
        let AnyEvent { data, bubble_state } = self;

        data.downcast::<T>()
            .ok()
            .map(|data| UiEvent{ bubble_state, data })

    }
}

pub struct UiEvent<T> {
    pub data: Arc<T>,

    #[allow(unused)]
    bubble_state: Rc<BubbleState>,
}