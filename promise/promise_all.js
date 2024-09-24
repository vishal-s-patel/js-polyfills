function myPromiseAll(tasks) {
  let results = [];
  let completedPromises = 0;
  return new Promise((resolve, reject) => {
    if (tasks.length === 0) resolve([]);
    tasks.forEach((task, index) => {
      Promise.resolve(task)
        .then((result) => {
          results[index] = result;
          completedPromises += 1;
          if (completedPromises === tasks.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
}

const task1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000);
  });
};

const task2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(2), 2000);
  });
};

const task3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(3), 3000);
  });
};

myPromiseAll([task1(), task2(), task3()])
  .then((result) => console.log("resolved::", result))
  .catch((err) => console.error("err::", err));
