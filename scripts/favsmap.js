const shopFavicon = {
  aliexpress: {
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC30lEQVR4Aa1XA7BbQRTd4W9U225Q27btUTUuBtWwGNS2bdtmXr5t2/btu2nMvfk5Mzd8u3u1Z88yXgidGzXQqWUrBJX0vE4p/Su+Z4pWabBMw2/nBKVs+e+ujeszb0HXU64S1NJL4uSlogGnlWqV0ovaHooezFMIA5hUUMkOi5NViQYeWpVOJTv4sy2TMAp8e0hbG1IKXjI/QSNpzxe5StpftFSeiWM2rBBtOa8TKTg3c4XfXSVteRdHS9q3HZL2bqVkIvOP0qc7cwSsk/jAH0pqM66fhIyrx6nlCMb+YrYwNBxQrCw2EkqjQsk9oVNJd9ttNWq3B8/sD0YET+tDdaIEG92y8S5To8h5fgeMyH54lZwFrVp6hiGQtYgkA2FLxgDU1oIRtdXVEDpvKDkL33s0VTCkV8pA/+HtoDwpDmyBv+F/tF6QLGHI7bwDAkZ2hOIgAZyhSPgO/kPb0MqgVUm1vGmvSE0EdyiPj4KQOYN4nfiNGchy1+05z+7oa86L2uoqyLp7EQInqlw7oJRmoAMV1vS6HNkNSUa/z+uKkhA/SDt3ABJ2bYKodXNtnSh34MCK/w5cOwFlMRFQV1SkJEDW/cuQcnw3xG1Z7cgBNyWY0Q9ynt4CqKkBXmC58t4+htBFI92XgPfYDVs0Sh+NO1RmpEL4ykm8TfiLoYzi5oARHaA4UOu83mEBEDC2K20booYjEdGwtlCeGGsfeWYaBI7tRiMitWSxkYpLKAOxHMaeMNY8bNk4MhWHaJicIVBAEgfrG9OInBd3PZFpp5gRqF6pxzHuDiNCZg+kLl4sWitmCVSvxEmQJ5B6PYl+J7PFp46snkeS7Pop6uJBDiUZwr+7pA2qV25RuncbGkmU6jQ+XXlkeRafLF+O1M29OM7NeIDSGVPlxYtJIEZOvpqherXjCHq377K/mtGvaaeJjuCzp/RbzVtAAYkaDvkblYyhphVoeKrhb+go0que4TjxD4SilE/zlgWZAAAAAElFTkSuQmCC',
    name: 'Алиэкспресс'
  },
  artlebedev: {
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAeFBMVEXtHCTtFh/tExztGyPsAAjuIyvxWF7vLzbsAADtABH2nqH////5uLvvOT/+8fH+9vb2mJv97Oz96uv3p6n94+T2m57709T6zc7vQEbtDBnxXWH4u730h4rybnL5x8j94OHwSk/zd3vvMznyaW31jI/6w8XxU1j0fYDBU82pAAABLUlEQVR4AeXQZ0LDMAwFYClyqMSjdbPjLqDz/jfEdsZPDgBftvI86Z/hgmkhIvmRLCVXvm1UlqyUIqbG0fL/HcAH5QRvd35b2L5CQpntUTctOqNIP7B31qMeEkqKEZ509K0SUTigFXvHsdSEIrEjTiahqoKQuB5nK2pQQYvURmUO2AkXY8GnCc3EYptAU0DCDl+F8M6HNWDfGJTmgDZoXKwd8W00Ya79VpO6CsUVNXEsbrArmTLXAZ8Z6uCGNFqqxmVMs+Crx2eboXZn9FNZ3CduYd6WO5eJVJW7xBlSFm7oXcqO+CSWiENV8ydUMhL19SbN4oGzUZJWYT2eloUUyNNEH2QN6AsYLkmjN1wcReugUngf3KtG9hn8/OfhhCaiKhR0xqpTy5Hpd0x/wA+KCxTqQrEuMQAAAABJRU5ErkJggg==',
    name: 'Студия Артемия Лебедева'
  },
  avito: {
    icon: 'data:image/png;base64,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',
    name: 'Авито'
  },
  'dns-shop': {
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAclBMVEX2ix/2ihv2iRj3mUH4p2H4pFz3lzf2hgb3nkv2kCn4qmj3kzH3n076xZX//vv+8uf4r272hAD+9+/959X2jhb////95tH6yZ76w5D5tnf6vIX3pVb6vov5uH/71bT97dz60Kv6y6L6w5T827784Mz5s3Y/agnNAAAAt0lEQVR4Ae3QNYIDMQwAQMkLcsg5g5YZ/v/FszZQpU6VMTPAzzehEgggSZrSI17jSRplOSl9UtI80yUV1+cMuhlx/7POB4pNzgtzoOeE0lR13XjTMpuObMk37uuoVa8JThNRiP3DyBOV3LMXs31PSCzZnCu+2YXdyrbfIs+1eh0xleV0N5pLS7tjvixi4IZAUOXEeLWmIiBax94dCoID5letdQIKrznGJl5AHxA/fxQgqGfPzzf9A0PjDVQ4OCyNAAAAAElFTkSuQmCC',
    name: 'DNS'
  },
  labirint: {
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAAAoUlEQVR4AeWPEQzEQBBFh0qlpZPmPFmpliqH51lYvNRzdO5rdTutc92hDpXK4ibz7zaDzXfoo4GXzH9yVZoxhPBshfLYtWhqhNGtUKw3/mCGYh+FEjO0vIXSb1B8+UK31Adpml5kxKcojnQAeSCFUKTBBF7Ym8ALTeCFVPC1cGmp0NbCzQsRrDBHYYIVzg0VrLATE1RPwj3+8Xa7EGNwci1+Ugt9bUBkjRYAAAAASUVORK5CYII=',
    name: 'Лабиринт'
  },
  meshok: {
    icon: 'data:image/png;base64,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',
    name: 'Мешок'
  },
  mvideo: {
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABK0lEQVR4AXxSgaZCQRBd8PaBAgIhJCSQkADcLvqApARAqD8IAUn1EyWlX0gALkD9RQGXCGCabfbYTNVyONacMzNn15D514gZS0bCSAXM5S7W9SAOBcaCcWPQF9x8TQG6V/E6FFol/NNGa5jAYPFRGLWI2j3hNiu8WkfdHAaxHhtm/gjf7oUPRjBwmtj4cEiNL93cORyJcvlgZjOvjZZGErZqX8bpjI7o7u50FokzSEVkQ1jFsghgELheMxUDPf5mJwJ0xSlVpAZgrWGSPDt3+thZgAOOCTgPGGCFKUJDR6xAlytRrREMxhNvNMQaM2fQ9E9yp3ZX3huGSDxqOSNw1DhNhI80V+FgxF+Y6a+80ibv/DEIDVWrgC0zdeJMlYjM1I2ZmTCzcw+x2RkA7/0hW912znoAAAAASUVORK5CYII=',
    name: 'М.Видео'
  },
  onlinetrade: {
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAeFBMVEX/lkH/jS//kjn/hyH/kDP/ji//dAD/cgD/eAD/gxb/iSX/dgD/sXL/tX3/m03/fQL/hh7/uoX/////5M//m0v/3sT/7+P/cAD/q2j/9/H/bAD/1bb/7d//xJb/ZAD/mUb/XQD/oVb/gRH/z6r/2bv/qWT/4sr/yqJVEV+xAAABNUlEQVR4AcyQVaKEMAxFC6HO0OA6bvvf4ZsGff47B0tyD1bGgj8JGfwDi/7O+XsIQs4oDWAsVQaM9oUIWBTvJuLECUQqEwcafJGGLMpW8kKK0heVwrrxRatZVGUbwi6ka2Hr3l8bNQnV0FLQy46C/cH4QeXMJCTS7UnE7uivw4HekHbRJBylFP6WNnA1fYUh3zg+CcHpcB6fcJFU9PnrdO1gFq7pNfPcJKLwGXG0i7AZQX2fmofEL0J7lwCg1TC2TQ2LkN/K8roLfA6miymvnF6F8KCUqJ0BAERt8/EfzSokFhHBY5zsDrRY4GAjKJhQ8TOllXh28KNAS+0J1CRQdxaLcB3zXW0m4dm/YA4mbJwP1XC7C4RJUPaFNjBhnNOgrQCYBfTACurL5YIfo2eyJ5h5CWZ/AKZcJzyiS08TAAAAAElFTkSuQmCC',
    name: 'Онлайн Трейд'
  },
  ozon: {
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEVHcEz7D1L7FFb5EVUAXf8AW/8AXP/5B0ZPVtoAXP8AW//5EFX////6AEQATP/6A1D9r8H+0t77SnfZ5v/+5ez/8fb6JGX9kqvr8//9vc+sxP9Dfv+Usv+6z//D1//7b5H4/P9hkP+SJqOQOK2VNafJntLeAAAACnRSTlMA5EyuTOHm+guuiS8soAAAATxJREFUOI19k9mWgyAQRDExHhWbxX3PMvP/3zjQgILRqSelLk1TACFKcZbkX0qymBilj2/X6JGif2VraeJyPtZQ6//n53lMsuCfObmBjCS++x7X/lW8qnXOLZKQ3X6vhadqMogD2FQVB43MA9h4tHURtgP9iV8UC3OA8xvxbClvn8L+TwZgdnlZAnBOKeUAwpVQAJvN7BK0aWWIHoEc/Zp7tirS4qgGTIEGKL0CsIOShwB0dqMKwP4OBSjHAvMGiBDgUCOAQTEdQh0A0Bq/+yCw4Pe2RxVCZ3KpAX71NqctJVTpYmzUFPjRQS12RA5ikNtBmGC4H3Ug1zY5P2y1oG3JXDlWSt8e9mOJ7KUFoN0gm6KppXiCd2p3e+0Bt2cUhH6zD+eYtFPknt4VkLrHew5EqX3fcRaduPeb9v4AVm4vHjvSW/kAAAAASUVORK5CYII=',
    name: 'Озон'
  },
  vseinstrumenti: {
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAeFBMVEX////43t7niIjbODjXDg7WAADjc3PTAADVAADkd3fdSkrUAADfU1PnfX376OjqlJTdTU320tLwuLjso6P10ND429vbOzvjcHDpl5fgXV3trKzzxcXxvb3gZWXcQkLmjIz99fX98fHZLS3mhYXhamrsqKjYFxffWVknLq/7AAABOElEQVR4AY2TBXaEMBQABwn5Lb6Os37/G/Yha3SRQWITT2gwTMtWA2zLNOhxtKgviP6h5ddVI7gegO+qUVwTDK0m0AHm9/5FujDE+lasHDNqe5aIbz07AHE32y+CWNAa7ei+CO4K01+tN9vdSxC3QXrBwGF/SEjkIYizjeNNGrmdkOVFGOQZ5UuoaDFbQwoq8Am0ehfWhxr6Pg4Ax5N8CL86gUI6o1zlvoj6ECIdgSfKthtDNXwK531A4MoFduKeIXUHQkPlSgGWWMB1KBjbGja6EfTxm1BqnUOSwC0nqP8LnogHYQIhnOqvLaRwTgDO+osQZwGgCiDTMhRCOu7uBWpR8jZNaYQkvV6va0dElWna7NE6vfSLSjnY7i7oE0pKKlETSDh/7KcvznnJ1QN/7PKe6dmex6//H/oJHdn5lQyGAAAAAElFTkSuQmCC',
    name: 'ВсеИнструменты.ру'
  },
  yandex: {
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAWlBMVEUAAADfvyD/1y3/2S//30T/30Pvxyj/2i7/1Sr/3DlWTSONeiTUtSu/oSEoKCXkvyI4MxuiiyL/2S4fHxtxYBX/0BH/0hYWFhT/0xgVFRQeHA0NDQwQEBD/0A7SwJowAAAAHXRSTlMAEGCf4f8gkDD///r////////////b7///z5n/YKB50wQAAAF5SURBVHgBZZMHYoQgEEUHO6BUXYgk979mPtiIeQvT/2ynB9a0Xdf3Xdc2jP4zjGjetMOrzcb+xcj+yKF+01VLptJ/0021ntctIeRc7WAd57znxRS/KIAZ3jHKjKhW9FqoA85HAgMvzPxCnn2BOD9Je1aNnI8F6sTysoJx7ribD41FbNTJjIQzapxzXJeqV8I5qy5Qd66h1gHhlc9nddr4E+EyLW2w0heUl26FLbOIM5I+zi3+Ypn9jXXAKnLVVr8gDB7ALA4t7zFgkIaQr5fFCZPtkqUh0AdFABFAAehiZel7Qj+zinAh4yERWfNFe8gYTIOEY2I0R4ibdvoOCV7HlAm4NkZxhrjfxHIk45zyPFhjjEu6YUQ7ik8t6AjWdLLnrzt5FOVZkbEgfQJmGQjs+tH4WPj5iYu1cxwpwzZU9Fo0GiEesJmNUWHYSjqvXqCbz2G2gU4mTNSc+olAteMF9BVsfPdH9v7ztlX3M9by6u+/fdDc/vz9fwFWDjkE7DdrhQAAAABJRU5ErkJggg==',
    name: 'Яндекс Маркет'
  },
  xlm: {
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAaVBMVEWHWJ6JWJqJV5yEWpyKWJ2KV5yMV5+LWJuLVpyJV56KVp6LWJ2MV5uKV5qLVpqMV523mMKwiLqcdazIrc6PYaLKstS2msDNttOTY6Hf1OX///+ujbqmf7T5+fvczeSmf7aYbKf38PeidbBDq+WWAAAAuklEQVR4ATXHVWIEMAgFQB7EU5f7H7DuMUJtd/4GhKPlhnIEcQJ6hDXntBtz3lt6oD3rT6sFWVzU2WdWDmNa+BJXbEwkleGcWRquMLpQAHKzC6DJPvf14zb4EfsF2DcOj90VrFnIPolIJfm9ssV7cvoJjCl0Vlkzzj6SXJKevLBgoRm1DB4cxgLXZb1+xJW30fQkJM7TqG6p+xTwFxuN7YB3duJlNBLec0T1QeaMIw6BW3EyiFjQoFa/AWRmZsHWHiF0AAAAAElFTkSuQmCC',
    name: 'XL Media'
  }
};

export {shopFavicon};
