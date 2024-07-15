describe("Memory Game", () => {
  it("loads the game", () => {
    cy.visit("http://localhost:5174"); // 確保這個地址是你應用程序運行的本地地址
    cy.contains("Memory Game");
  });

  it("flips cards and matches pairs", () => {
    cy.visit("http://localhost:5174");

    cy.get(".card").should("have.length", 16);

    // 模擬點擊兩張不同的卡片，這裡假設第一張和第二張卡片是一對
    cy.get(".card").eq(0).click();
    cy.get(".card").eq(8).click(); // 使用相同內容的另一張卡片索引

    // 檢查卡片是否翻轉
    cy.get(".card.flipped").should("have.length", 2);

    // 繼續匹配所有卡片
    for (let i = 0; i < 16; i += 2) {
      cy.get(".card").eq(i).click();
      cy.get(".card")
        .eq(i + 1)
        .click();
    }

    // 檢查遊戲成功完成
    cy.contains("Success!");
  });

  it("fails when time runs out", () => {
    cy.visit("http://localhost:5174");

    // 模擬等待超過 60 秒
    cy.wait(61000);

    // 檢查遊戲失敗
    cy.contains("Failed");
  });
});
