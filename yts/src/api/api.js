import axios from 'axios';

// {url:"http://www.yts.ag"}
// [{name:"posts.json"}]
class API{
  constructor({url}){
    this.url = url;
    this.endpoints = {}
  }
  
  /**
   * Create and store a single entity's endpoints
   * @param  {A entity Object} entity
   * @param  {} {this.endpoints[entity.name]=this.createBasicCRUDEndpoints(entity
   */
  createEntity({name, value}){
    this.endpoints[name] = this.createBasicCRUDEndpoints(value);
  }

  createEntities(arrayOfEntity){
    arrayOfEntity.forEach(this.createEntity.bind(this))
  }

  createBasicCRUDEndpoints(value){
    let endpoints = {};
    const resourceURL = `${this.url}/${value}`
    endpoints.getAll = ({query} = {})=> axios.get(resourceURL, {params: {query}});
    endpoints.getOne = ({id}) => axios.get(`${resourceURL}/${id}`);
    endpoints.create = (toCreate) => axios.post(resourceURL, toCreate)
    endpoints.update = (toUpdate) => axios.put(`{resourceURL}/${toUpdate.id}`, toUpdate);
    endpoints.delete = ({id}) => axios.delete(`${resourceURL}/${id}`);
    return endpoints;
  }

}

export default API;
