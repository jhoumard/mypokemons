const getUniqueId = (items) => {
    const ids = items.map(x => x.id);
    const maxId = ids.reduce((a, b) => Math.max(a, b));
    return maxId + 1;
};

export { getUniqueId };