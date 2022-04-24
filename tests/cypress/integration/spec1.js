describe("Spec.1: ホームページ画面", () => {

  it("Spec.1-1: 画面遷移が可能であることを確認", () => {
    // 画面遷移
    cy.visit("http://localhost:3000/");
  });

  it("Spec.1-2: 画面の情報確認", () => {
    // 画面遷移
    cy.visit("http://localhost:3000/");

    // 画面タイトルが「Libergraphy」であること
    cy.title().should('eq', 'Libergraphy');
  });

  it("Spec.1-3: 初期表示の要素確認", () => {
    // 画面遷移
    cy.visit("http://localhost:3000/");

    // ロゴ画像が表示されている
    cy.get("[data-testid='logo-img']").should('be.visible');  
    // ロゴリンクが表示されている
    cy.get("[data-testid='logo-link']").should('be.visible');

    // ホームのリンクが表示されている
    cy.get("[data-testid='home-link']").should('be.visible');
    // ホームリンクのテキストが「ホーム」であること
    cy.get("[data-testid='home-link']").should('have.text', 'ホーム');
    // ホームリンクの遷移先が「/」であること
    cy.get("[data-testid='home-link']").should('have.attr', 'href', '/');

    // 記事一覧のリンクが表示されている
    cy.get("[data-testid='article-list-link']").should('be.visible');
    // 記事一覧のテキストが「記事一覧」であること
    cy.get("[data-testid='article-list-link']").should('have.text', '記事一覧');
    // 記事一覧のリンクの遷移先が「/article-list」であること
    cy.get("[data-testid='article-list-link']").should('have.attr', 'href', '/article-list');

    // 記事作成のリンクが表示されている
    cy.get("[data-testid='write-article-link']").should('be.visible');
    // 記事一覧のテキストが「記事作成」であること
    cy.get("[data-testid='write-article-link']").should('have.text', '記事作成');
    // 記事一覧のリンクの遷移先が「/write-article」であること
    cy.get("[data-testid='write-article-link']").should('have.attr', 'href', '/write-article');

    // お問い合わせリンクが表示されている
    cy.get("[data-testid='contact-link']").should('be.visible');
    // お問い合わせのテキストが「お問い合わせ」であること
    cy.get("[data-testid='contact-link']").should('have.text', 'お問い合わせ');
    // お問い合わせのの遷移先が「/contact」であること
    cy.get("[data-testid='contact-link']").should('have.attr', 'href', '/contact');

    // タイトルのラベルが表示されている
    cy.get("[data-testid='title-label']").should('be.visible');
    // タイトルのラベルが「ホーム」であること
    cy.get("[data-testid='title-label']").should('have.text', 'ホーム');
    
    // スクリーンショットをとる
    cy.screenshot('初期表示');
  });

  it("Spec.1-4: ロゴのリンクを押下した場合のアクション", () => {
    // 画面遷移
    cy.visit("http://localhost:3000/");
    // ロゴリンクを押下
    cy.get("[data-testid='logo-link']").click();
    // TODO: これで確認できていない、確認方法をタイトルとするかを要検討
    // ホームに遷移したことの確認
    cy.url ().should ('include', '/');
    // スクリーンショットをとる
    cy.screenshot('ロゴリンク押下後');
  });

  it("Spec.1-5: ホームのリンクを押下した場合のアクション", () => {
    // 画面遷移
    cy.visit("http://localhost:3000/");
    // ロゴリンクを押下
    cy.get("[data-testid='home-link']").click();
    // TODO: これで確認できていない、確認方法をタイトルとするかを要検討
    // ホームに遷移したことの確認
    cy.url ().should ('include', '/');
    // スクリーンショットをとる
    cy.screenshot('ホームリンク押下後');
  });

  it("Spec.1-6: 記事一覧のリンクを押下した場合のアクション", () => {
    // 画面遷移
    cy.visit("http://localhost:3000/");
    // ロゴリンクを押下
    cy.get("[data-testid='article-list-link']").click();
    // 記事一覧に遷移したことの確認
    cy.url ().should ('include', '/article-list');
    // スクリーンショットをとる
    cy.screenshot('記事一覧リンク押下後');
  });

  it("Spec.1-7: 記事作成のリンクを押下した場合のアクション", () => {
    // 画面遷移
    cy.visit("http://localhost:3000/");
    // ロゴリンクを押下
    cy.get("[data-testid='write-article-link']").click();
    // 記事作成に遷移したことの確認
    cy.url ().should ('include', '/write-article');
    // スクリーンショットをとる
    cy.screenshot('記事作成リンク押下後');
  });  

  it("Spec.1-8: お問い合わせのリンクを押下した場合のアクション", () => {
    // 画面遷移
    cy.visit("http://localhost:3000/");
    // ロゴリンクを押下
    cy.get("[data-testid='contact-link']").click();
    // 記事作成に遷移したことの確認
    cy.url ().should ('include', '/contact');
    // スクリーンショットをとる
    cy.screenshot('お問い合わせリンク押下後');
  });  

});