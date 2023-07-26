export class Storage{
    static get(dataKey){
        var data;
        chrome.storage.session.get(dataKey, (items) => data = items.dataKey);
        return data;
    }

    static set(dataKey, data){
        var result = false;
        chrome.storage.session.set({ dataKey: data }, () => result = true);
        return result;
    }
}
