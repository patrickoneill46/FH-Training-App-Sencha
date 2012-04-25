app.views.Viewport = Ext.extend(Ext.Panel, {
  fullscreen: true,
  ui: 'light',
  layout: 'card',

  cardSwitchAnimation: {
    type: 'slide',
    cover: true
  },

  initComponent: function() {
    // Put instances of cards into app.views namespace
    Ext.apply(app.views, {
      home:     new app.views.Home(),
      map:      new app.views.MapView(),
      twitter:  new app.views.Twitter(),
      payment:  new app.views.Payment()
    });
    //put instances of cards into viewport
    Ext.apply(this, {
      items: [
        app.views.home,
        app.views.map,
        app.views.twitter,
        app.views.payment
      ]
    });
    app.views.Viewport.superclass.initComponent.apply(this, arguments);
  }
});

// Loading Spinner
var mask = new Ext.LoadMask(Ext.getBody(), {
  msg: "Loading Data"
});
