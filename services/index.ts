export class ApiService {
  apiUrl: string;
  token: string;
  constructor(token: string) {
    this.apiUrl = "https://pokeapi.co/api/v2";
    this.token = token;
  }

  async makeRequest(url: string, method = "GET", body = null) {
    const headers = {
      "Content-Type": "application/json",
      Authentication: `Bearer ${this.token}`,
    };

    const options = {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        // Handle error status
        throw new Error("Request failed with status " + response.status);
      }
      return response.json();
    } catch (e) {
      const error = e as Error;
      return { Success: false, Message: error.message };
    }
  }

  async getPokemonList() {
    return this.makeRequest(`${this.apiUrl}/pokemon`);
  }

  async getPokemonDetails(name: string) {
    return this.makeRequest(`${this.apiUrl}/pokemon/${name}`);
  }
}
