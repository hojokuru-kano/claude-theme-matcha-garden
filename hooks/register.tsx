import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'
import { SCENE } from './scene'

// Matcha by day, a tea house at dusk by night.
const { theme, problems } = makeColors({
  label: 'Matcha garden',
  roles: { accent: '#5F7A30', danger: '#B0483A', success: '#5E8A3A', warning: '#A8761E', pro: '#7A5E94' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#EEF0E2',
        'surface-1': '#F7F7EE',
        'surface-2': '#FBFBF5',
        'text-primary': '#2C3524',
        'text-secondary': '#4F5A43',
        'text-muted': '#636D53',
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#1C2219',
        'surface-1': '#232A20',
        'surface-2': '#2A3226',
        'surface-3': '#2E3629',
        'text-primary': '#E4EAD8',
        'text-secondary': '#C3CCB2',
        'text-muted': '#A4AD95',
      },
    },
  },
})

const LOOK: ThemeSetArgs = {
  colors: theme,
  backdrop: { scene: 'matcha-garden', glass: false },
}

const LIVE = true

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    // Paused at the person's request while the look is reworked in a preview:
    // back to the app's own look until LIVE is set to true again.
    if (!LIVE) {
      await $.theme.clear()
      return next(e)
    }
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if ((e.surface !== 'desktop' && e.surface !== 'mobile') || e.props.scene !== 'matcha-garden') {
      return next(e)
    }
    const { Svg } = $.ui.resolve(e)

    return <Svg source={SCENE} alt="Matcha-green leaves swaying gently at the edges of the window" />
  })
}
