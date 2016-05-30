// @trf = {rotate, scale, translate, scaleX, scaleY, translateX, translateY,...}

// Hình vuông
// @opt = {color, mode, lineWidth, opacity, align}
CanvasRenderingContext2D.prototype.drawRect = function(x, y, w, h, opt, trf) {
  var i, a, k;
  opt = opt || {};
  opt.mode = (opt.mode === undefined || opt.mode == 1) ? "fill" : "stroke";
  if (opt.color !== undefined)
    this[opt.mode + "Style"] = opt.color;
  if (opt.lineWidth !== undefined)
    this.lineWidth = opt.lineWidth;
  switch (opt.align) {
    case "left center":
    case "left":
      y -= h / 2;
      break;
    case "left bottom":
      y -= h;
      break;
    case "center top":
    case "top":
      x -= w / 2;
      break;
    case "center center":
    case "center":
      x -= w / 2; y -= h / 2;
      break;
    case "center bottom":
    case "bottom":
      x -= w / 2; y -= h;
      break;
    case "right top":
      x -= w;
      break;
    case "right center":
    case "right":
      x -= w; y -= h / 2;
      break;
    case "right bottom":
      x -= w; y -= h;
      break;
  }
  if (a = (opt.opacity !== undefined || trf))
    this.save();
  if (opt.opacity !== undefined)
    this.globalAlpha = opt.opacity;
  if (trf) {
    this.translate(x + w / 2, y + h / 2);
    k = Object.keys(trf);
    for (i = 0; i < k.length; i++) {
      if (+trf[k[i]] !== NaN)
        this[k[i]]( +trf[k[i]] );
      else
        this[k[i]]( trf[k[i]][0], trf[k[i]][1] );
    }
    this.translate(-x - w / 2, -y - h / 2);
  }
  this[opt.mode + "Rect"](x, y, w, h);
  if (a)
    this.restore();
};

// Hình vuông bo góc
// @opt = {color, mode, lineWidth, opacity, align}
CanvasRenderingContext2D.prototype.drawRoundRect = function(x, y, w, h, r, opt, trf) {
  var i, a, k;
  if (+r !== NaN)
    r = [r, r];
  opt = opt || {};
  opt.mode = (opt.mode === undefined || opt.mode == 1) ? "fill" : "stroke";
  if (opt.color !== undefined)
    this[opt.mode + "Style"] = opt.color;
  if (opt.lineWidth !== undefined)
    this.lineWidth = opt.lineWidth;
  switch (opt.align) {
    case "left center":
    case "left":
      y -= h / 2;
      break;
    case "left bottom":
      y -= h;
      break;
    case "center top":
    case "top":
      x -= w / 2;
      break;
    case "center center":
    case "center":
      x -= w / 2; y -= h / 2;
      break;
    case "center bottom":
    case "bottom":
      x -= w / 2; y -= h;
      break;
    case "right top":
      x -= w;
      break;
    case "right center":
    case "right":
      x -= w; y -= h / 2;
      break;
    case "right bottom":
      x -= w; y -= h;
      break;
  }
  if (a = (opt.opacity !== undefined || trf))
    this.save();
  if (opt.opacity !== undefined)
    this.globalAlpha = opt.opacity;
  if (trf) {
    this.translate(x + w / 2, y + h / 2);
    k = Object.keys(trf);
    for (i = 0; i < k.length; i++) {
      if (typeof trf[k[i]] == "number" || trf[k[i]].length == 1)
        this[k[i]]( +trf[k[i]] );
      else
        this[k[i]]( trf[k[i]][0], trf[k[i]][1] );
    }
    this.translate(-x - w / 2, -y - h / 2);
  }
  this.beginPath();
  this.moveTo(x + r[0], y);
  this.lineTo(x + w - r[0], y);
  this.quadraticCurveTo(x + w, y, x + w, y + r[1]);
  this.lineTo(x + w, y + h - r[1]);
  this.quadraticCurveTo(x + w, y + h, x + w - r[0], y + h);
  this.lineTo(x + r[0], y + h);
  this.quadraticCurveTo(x, y + h, x, y + h - r[1]);
  this.lineTo(x, y + r[1]);
  this.quadraticCurveTo(x, y, x + r[0], y);
  this.closePath();
  if (a)
    this.restore();
};

// Hình tròn
// @opt = {color, mode, lineWidth, opacity, align, startAngle, endAngle, clockWise}
CanvasRenderingContext2D.prototype.drawArc = function(x, y, r, opt, trf) {
  var i, a, k;
  opt = opt || {};
  opt.mode = (opt.mode === undefined || opt.mode == 1) ? "fill" : "stroke";
  if (opt.color !== undefined)
    this[opt.mode + "Style"] = opt.color;
  if (opt.lineWidth !== undefined)
    this.lineWidth = opt.lineWidth;
  switch (opt.align) {
    case "left top":
      x += r; y += r;
      break;
    case "left center":
    case "left":
      x += r;
      break;
    case "left bottom":
      x += r; y -= r;
      break;
    case "center top":
    case "top":
      y += r;
      break;
    case "center bottom":
    case "bottom":
      y -= r;
      break;
    case "right top":
      x -= r; y += r;
      break;
    case "right center":
    case "right":
      x -= r;
      break;
    case "right bottom":
      x -= r; y -= r;
      break;
  }
  if (a = (opt.opacity !== undefined || trf))
    this.save();
  if (opt.opacity !== undefined)
    this.globalAlpha = opt.opacity;
  if (trf) {
    this.translate(x + w / 2, y + h / 2);
    k = Object.keys(trf);
    for (i = 0; i < k.length; i++) {
      if (+trf[k[i]] !== NaN)
        this[k[i]]( +trf[k[i]] );
      else
        this[k[i]]( trf[k[i]][0], trf[k[i]][1] );
    }
    this.translate(-x - w / 2, -y - h / 2);
  }
  if (opt.startAngle === undefined)
    opt.startAngle = 0;
  if (opt.endAngle === undefined)
    opt.endAngle = Math.PI * 2;
  if (opt.clockWise === undefined)
    opt.clockWise = false;
  this.arc(x, y, r, opt.startAngle, opt.endAngle, opt.clockWise);
  if (a)
    this.restore();
};

// Đường thẳng
CanvasRenderingContext2D.prototype.drawLine = function(line, opt, trf) {
};
