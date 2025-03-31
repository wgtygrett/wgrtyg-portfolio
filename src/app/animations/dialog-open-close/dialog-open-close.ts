import { animate, keyframes, style, transition, trigger } from '@angular/animations'

/**
 * This animation is meant to be used by a dialog/modal component and is triggered
 * when the dialog opens or closes.
 *
 * When transitioning to an `open` state, the dialog's opacity fades in from 0 to 1,
 * and the dialog content box slides up vertically, stopping in the center of the screen.
 *
 * When transitioning to a `closed` state, the dialog's opacity fades out from 1 to 0,
 * and the dialog content box slides up vertically before disappearing.
 */
export default trigger('dialogOpenClose', [
  transition('closed => open', [
    animate(
      '300ms',
      keyframes([
        style({ transform: 'translateY(25%)', opacity: 0 }),
        style({ transform: 'translateY(0)', opacity: 1 }),
      ])
    ),
  ]),
  transition(
    'open => closed',
    animate(
      '300ms',
      keyframes([
        style({ transform: 'translateY(0)', opacity: 1 }),
        style({ transform: 'translateY(-25%)', opacity: 0 }),
      ])
    )
  ),
])
