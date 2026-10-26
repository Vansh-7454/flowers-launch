async function main() {
  const res = await fetch('http://localhost:3000/');
  const html = await res.text();
  const cssLinks = html.match(/href="(\/_next\/static\/css\/[^"]+)"/g);
  console.log('CSS links:', cssLinks);
  if (cssLinks && cssLinks[0]) {
    const url = 'http://localhost:3000' + cssLinks[0].replace('href="', '').replace('"', '');
    const cssRes = await fetch(url);
    const cssText = await cssRes.text();
    console.log('Contains .btn-chartreuse?', cssText.includes('btn-chartreuse'));
    const idx = cssText.indexOf('btn-chartreuse');
    if (idx !== -1) {
      console.log('Snippet:', cssText.substring(idx - 20, idx + 200));
    }
  }
}
main();
