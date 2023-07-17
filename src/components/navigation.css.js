import { style } from '@vanilla-extract/css'

export const link = style({
  height: 'fit-content',
  color: 'black',
  textDecorationThickness: '1px',
  textUnderlineOffset: '3px',
  border: '1px solid black'
})

export const activeLink = style([
  link,
  {
    color: 'green'
  }
])

export const listItem = style({
  marginLeft: '5px'
})
