export default function getNeighborhoodsList()  {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  const addNeighborhood = (neighborhood) => {
    self.sanFranciscoNeighborhoods.push(neighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}

