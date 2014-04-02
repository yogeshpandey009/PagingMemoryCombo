Ext.define('My.customcomponent.PagingMemoryCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.pagingmemorycombo',
    pageSize: true,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'name',
    /*
    Default value
    pagingDisplayMsg: "Displaying {0} - {1} of {2}"
    */
    showPagingInfo: false,
    initComponent: function() {
        this.callParent(arguments);
        if (this.showPagingInfo) {
            var boundList = this.getPicker();
            var pagingToolbar = boundList.pagingToolbar;
            pagingToolbar.add('->');
            pagingToolbar.add({
                xtype: 'tbtext',
                itemId: 'displayItem'
            });
            if (this.pagingDisplayMsg) {
                pagingToolbar.displayMsg = this.pagingDisplayMsg;
            }
        }
    },
    afterQuery: function(queryPlan) {
        this.callParent(arguments);
        var combo = queryPlan.combo;
        combo.loadPage(1, {
            rawQuery: queryPlan.rawQuery
        });
    }
});
