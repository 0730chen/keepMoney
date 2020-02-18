type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createAt?: Date;
}
type Tag = {
    id: string;
    name: string;
}
type TagListModel={
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success'|'duplicated';
    update: (id: string,name: string) => 'success'|'duplicated'|'Not Found';
    delete: (id: string) => boolean;
    save: () => void;
}

interface Window {
    tagList: Tag[];
}