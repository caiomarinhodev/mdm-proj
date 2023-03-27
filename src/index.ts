import { list, findById, create, update } from "./repository/distributionRepository";

async function run() {
  const distros = await list();
  console.log('list empty', distros);

  const new_distro = await create(1, 1, true, true);
  console.log('create', new_distro);

  const distro = await findById(1);
  console.log('findById', distro);

  await update(1, 1, 1, true, true);

  const distro2 = await findById(1);
  console.log('after update', distro2);


  const distros_new = await list();
  console.log('new list', distros_new);
}

run();
