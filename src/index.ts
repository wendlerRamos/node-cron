import cron from 'node-cron';
import axios from 'axios';


cron.schedule(`*/1 * * * *`, async () => {
  console.log(`Running cron scheduller`);
  try {
    await axios.get('https://controle-de-gastos-api-production.up.railway.app/scheduler')
  }catch(e){ 
    console.log(`Error: {e}`)
  }
});
