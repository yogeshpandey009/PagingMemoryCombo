Ext.define("My.sample.PagingMemoryStore", {
    extend: 'Ext.data.Store',
    alias: 'store.pagingmemorystore',
    requires: ['Ext.ux.data.PagingMemoryProxy'],
    fields: ['name'],
    //extend: 'Ext.ux.data.PagingStore',
    autoLoad: false,
    //expandData: true,
    pageSize: 20,
    proxy: {
        type: 'pagingmemory',
        //enablePaging: true,
        reader: {
            type: 'array'
        }
    }
});
