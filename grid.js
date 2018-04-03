class skew {
  constructor(e) {
    this.wrap = document.querySelector(e);
    this.wrapMarginTop = this.wrap.offsetTop;
    this.el = this.wrap.querySelectorAll('.skewItem');
    this.content = [];
    this.length = this.el.length;
  }
  chk(idx) {
    for (let i = idx; i < this.length; i++) {
      if (this.content[i] === undefined) {
        this.content[i] = {};
        this.content[i].el = this.el[i];
        this.content[i].style = undefined;
        this.content[i].elTop = this.el[i].offsetTop;
        this.content[i].elLeft = this.el[i].offsetLeft;
        this.content[i].elHeight = this.el[i].offsetHeight;
      } else {
        if (this.content[i].elTop === this.el[i].offsetTop && this.content[i].elLeft === this.el[i].offsetLeft) {
          return false;
        };
        this.content[i].elTop = this.el[i].offsetTop;
        this.content[i].elLeft = this.el[i].offsetLeft;
      }
    }
    return this.content;
  }
  paint(idx) {
    this.chk(idx);
    const current = this.content[idx];
    const currentTop = current.elTop;
    const currentLeft = current.elLeft;
    let ex = idx - 1 < 0 ? current : this.content[idx - 1];
    for (let i = idx - 1; i >= 0; i--) {
      if (this.content[i].elLeft === currentLeft) {
        ex = this.content[i];
        const exBottom = (ex !== current) ? ex.elTop + ex.elHeight : this.wrapMarginTop;
        const newMargin = ex.style === undefined ? 0 : ex.style;
        current.style = Number(currentTop - exBottom + newMargin);
        current.el.setAttribute('style', 'margin-top: -' + current.style + 'px;');
        this.content[idx].style = current.style;
        return false;
      }
    }
  }
  init() {
    this.chk(0);
    const _this = this;
    for (let i = 0; i < this.length; i++) {
      this.paint(i);
    }
  }
}
/*
var skew = function(e) {
  var vars = {};
  this.var = function() {
    vars.wrap = document.querySelector(e);
    vars.content = {};
    vars.content.el = vars.wrap.querySelectorAll('*');
    vars.length = vars.content.el.length;
    return vars;
  }
  this.chk = function() {
    for (var i = 0;)
  }
  this.position = function(opt) {

  }
  this.init = function() {
    this.var();
  }
  this.init();
} */

const a = new skew('main');
a.init();
