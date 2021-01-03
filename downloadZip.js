import {} from "https://cdn.jsdelivr.net/npm/jszip@3.2.1/dist/jszip.js";

const downloadZip = async (fn, files) => {
  const zip = new JSZip();
  //const fn = "img";
  //const folder = zip.folder(fn);
  files.forEach(file => {
    //folder.file(image.name, image.data);
    zip.file(file.name, file.data);
  });
  const blob = await zip.generateAsync({ type: "blob" });
  const link = document.createElement("a");
  const dataurl = URL.createObjectURL(blob);
  link.href = dataurl;
  link.download = fn; // `${fn}.zip`;
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export { downloadZip };
