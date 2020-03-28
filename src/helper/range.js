module.exports = (totalSize, req, res) => {
  const range = req.headers['range']; // 请求头：range: bytes=[start]-[end]
  if (!range) {
    return { code: 200 };
  }
  const sizes = range.match(/bytes=(\d*)-(\d*)/); // 用正则表达式解析range
  const end = sizes[2] || totalSize - 1;
  const start = sizes[1] || totalSize - end;

  if (start > end || start < 0 || end > totalSize) {
    return { code: 200 };
  }
  res.setHeader('Accept-Ranges', 'bytes');
  res.setHeader('Content-Range', `bytes ${start}-${end}/${totalSize}`);
  res.setHeader('Content-Length', end - start);
  return {
    code: 206, // partial content
    start: parseInt(start),
    end: parseInt(end)
  };
};
