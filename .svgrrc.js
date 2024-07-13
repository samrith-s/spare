module.exports = {
  icon: true,
  native: true,
  typescript: true,
  expandProps: true,
  ref: true,
  memo: true,
  namedExport: true,
  index: false,
  template(variables, { tpl }) {
    const name = variables.componentName.match(/svg([A-Za-z0-9]+)/i).pop();
    const exports = variables.exports.filter(
      (o) => o.type !== 'ExportDefaultDeclaration'
    );

    const finalExport = `export const Icon${name} = Memo`;

    return tpl`
      ${variables.imports};

      ${variables.interfaces};
    
      const ${variables.componentName} = (${variables.props}) => (
        ${variables.jsx}
      );

      ${exports};

      ${finalExport}
    `;
  },
};
