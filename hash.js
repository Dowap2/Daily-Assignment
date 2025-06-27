const BUCKET_SIZE = 101;
const buckets = Array.from({ length: BUCKET_SIZE }, () => []);

function hash(key) {
  let hashValue = 0;
  for (let i = 0; i < key.length; i++) {
    hashValue = (hashValue * 31 + key.charCodeAt(i)) % BUCKET_SIZE;
  }
  return hashValue;
}

function put(key, value) {
  const index = hash(key);
  const bucket = buckets[index];
  for (let i = 0; i < bucket.length; i++) {
    const pair = bucket[i];
    if (pair[0] === key) {
      pair[1] = value;
      return;
    }
  }
  bucket.push([key, value]);
}

function get(key) {
  const index = hash(key);
  const bucket = buckets[index];
  for (const [k, v] of bucket) {
    if (k === key) return v;
  }
  return undefined;
}

function remove(key) {
  const index = hash(key);
  const bucket = buckets[index];
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      bucket.splice(i, 1);
      return true;
    }
  }
  return false;
}

function containsKey(key) {
  return get(key) !== undefined;
}

function keys() {
  const result = [];
  for (const bucket of buckets) {
    for (const [k, _] of bucket) {
      result.push(k);
    }
  }
  return result;
}

function size() {
  let count = 0;
  for (const bucket of buckets) {
    count += bucket.length;
  }
  return count;
}

function isEmpty() {
  return size() === 0;
}

function clear() {
  for (let i = 0; i < BUCKET_SIZE; i++) {
    buckets[i] = [];
  }
}
