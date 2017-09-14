 function render_svg(e) {
  return (

      `<svg viewBox="${e.viewBox}">
        <use xlink:href="#${e.id}" />
      </svg>`

    )
}

export default render_svg