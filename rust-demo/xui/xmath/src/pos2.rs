use std::ops::{Add, AddAssign, Sub, SubAssign};

use crate::*;


#[repr(C)]
#[derive(Clone, Copy, Default, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Deserialize, serde::Serialize))]
#[cfg_attr(feature = "bytemuck", derive(bytemuck::Pod, bytemuck::Zeroable))]
pub struct Pos2 {
    /// How far to the right.
    pub x: f32,
    /// How far down.
    pub y: f32,
    // implicit w = 1
}

pub const fn pos2(x: f32, y: f32) -> Pos2 { Pos2{ x, y } }