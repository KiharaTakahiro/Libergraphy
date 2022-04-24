export const callApi = async (path: string, param?: any) => {
  // TODO: このべた書きはいけてないのでconfigから読み込む等工夫する
  return await fetch("http://localhost:8000" + path, param).then(r => r.json());
}