function allSettled(promises) {
  const mappedPromises = promises.map((p) =>
    Promise.resolve(p).then(
      (value) => ({ status: "fulfilled", value }),
      (reason) => ({ status: "rejected", reason })
    )
  );
  return Promise.all(mappedPromises);
}
