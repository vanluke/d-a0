export const rehydrateStyles = sheet => sheet.getStyleTags()
  .replace(/&(lt|gt|quot);/g, (m, p) => {
    if (p === 'lt') {
      return '<';
    }
    if (p === 'gt') {
      return '>';
    }
    return "'";
  })
  .replace(/(<([^>]+)>)/ig, '');
