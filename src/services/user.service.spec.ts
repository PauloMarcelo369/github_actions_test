import { UserService } from "./user.service";

describe("UserService", () => {
  const service = new UserService();

  it("should create a user", () => {
    const user = service.createUser("Paulo");

    expect(user).toEqual({
      id: 1,
      name: "Paulo",
    });
  });

  it("should throw error if name is empty", () => {
    expect(() => service.createUser("")).toThrow("Name is required");
  });
});
