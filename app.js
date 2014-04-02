//Ext.require(['My.CustomComponent.PagingMemoryCombo', 'My.sample.PagingMemoryStore']);
Ext.application({
    name: 'Fiddle',
    launch: function() {

        var pagingcombo = Ext.widget('pagingmemorycombo', {
            width: 450,
            anyMatch: true,
            emptyText: 'Search',
            lastQuery: '',
            store: {
                type: 'pagingmemorystore'
            },
            showPagingInfo: true,//show paging Info
            pagingDisplayMsg: "{0} - {1} of {2}",//change pagingDisplayMsg                        
        });

        var panel = Ext.widget('form', {
            title: 'Paging Memory Combo',
            height: 200,
            width: 550,
            bodyPadding: '30',
            items: [pagingcombo],
            renderTo: Ext.getBody()
        });
        var comboStore = pagingcombo.getStore();
        var data = [],
            i;
        for (i = 1; i <= 5000; i++) {
            var name = "Record #" + i;
            data.push([name]);
        }
        comboStore.proxy.data = data;
        comboStore.load();
    }
});
