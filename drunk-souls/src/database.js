import Dexie from 'dexie';

const db = new Dexie('drunkDatabase');
db.version(1).stores({
  status: 'id++, continue, covenantId, numberOfSins, numberOfTokens'
});
db.on("populate", function() {
  db.status.add({continue: false, covenantId: "", numberOfSins: 0, numberOfTokens: 0})
})


export default db;