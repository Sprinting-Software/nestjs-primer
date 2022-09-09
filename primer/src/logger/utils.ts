export function formatFileName(filePath: string): string {
  const result = filePath.substr(filePath.lastIndexOf('/') + 1); //.replace(/[^a-zA-Z0-9]/g, '_');
  return result.split('.')[0];
}

export function formatFileNameWithBrackets(filePath: string): string {
  return '[' + formatFileName(filePath) + ']';
}
