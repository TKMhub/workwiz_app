import React from "react";
import styles from "./Top.module.scss";
import Image from "next/image";

const Top = () => {
  return (
    <>
      <div className={styles.Top}>
        <div className={styles.Top_TechSelection}>
          <div className={styles.Top_TechSelection_Contents}>
            <h2>フロントエンド</h2>
            <br />
            <p>
              <Image
                src="/nextjs-13.svg"
                alt="nextjs Logo"
                width={130}
                height={30}
                priority
              />
              は、高速で革新的なウェブアプリケーションを作成するための最先端のフレームワークです。サーバーサイドレンダリング(SSR)や静的サイト生成(SSG)が容易に実現でき、高いパフォーマンスとSEO対策が期待できます。また、APIルーティングやコード分割などの機能により、機能性と柔軟性が向上します。
            </p>
            <p>
              <Image
                src="/react-2.svg"
                alt="react Logo"
                width={130}
                height={60}
                priority
              />
              (React)は、Facebookが開発した人気のJavaScriptライブラリで、コンポーネントベースの開発を実現します。開発効率の向上と保守性の高いコードを提供し、アプリケーションの拡張性が向上します。さらに、Virtual
              DOMを利用した高速な描画性能を提供し、パフォーマンスも最適化されます。
            </p>
          </div>
          <div className={styles.Top_TechSelection_Contents}>
            <h2>スタイル</h2>
            <br />
            <p>
              <Image
                src="/material-ui-1.svg"
                alt="material-ui Logo"
                width={130}
                height={50}
                priority
              />
              (Material
              UI)は、Googleのマテリアルデザインを実装したReactのUIコンポーネントライブラリです。美しく使いやすいUIを短期間で開発でき、ユーザーエクスペリエンスの向上に貢献します。また、豊富なコンポーネントやテーマカスタマイズ機能を利用でき、ブランドイメージに合ったデザインが実現可能です。
            </p>
            <p>
              <Image
                src="/sass-1.svg"
                alt="sass Logo"
                width={130}
                height={50}
                priority
              />
              は、CSSの拡張言語で、変数やネスト機能などを使用できます。効率的なスタイリングを行い、コードの管理やメンテナンスが容易になります。また、Sassのミックスインやパーシャル機能により、コードの再利用性が高まり、開発速度が向上します。
            </p>
          </div>
          <div className={styles.Top_TechSelection_Contents}>
            <h2>バックエンド</h2>
            <br />
            <p>
              <Image
                src="/django-community.svg"
                alt="django Logo"
                width={110}
                height={50}
                priority
              />
              は、Pythonで書かれた強力なWebフレームワークで、セキュリティ対策やデータベース処理が充実しています。開発速度の向上と堅牢なアプリケーションの構築が可能です。さらに、豊富な機能を持つ多くのサードパーティ製アプリケーションが利用でき、独自の機能拡張が容易です。
            </p>
          </div>
          <div className={styles.Top_TechSelection_Contents}>
            <h2>ホスティングサービス</h2>
            <br />
            <p>
              <Image
                src="/vercel.svg"
                alt="vercel Logo"
                width={120}
                height={50}
                priority
              />
              は、Next.jsやReactなどのフロントエンドプロジェクトに特化したホスティングサービスです。瞬時にデプロイが可能で、スケーラビリティに優れ、安定したパフォーマンスを提供します。
              さらに、サーバーレス関数やエッジネットワークを利用した高速なコンテンツ配信が可能で、グローバルなユーザーへの最適なパフォーマンスが実現されます。また、独自のドメイン設定やSSL証明書の自動取得が容易で、セキュアな運用がサポートされます。
            </p>
          </div>
        </div>
      </div>
      <footer></footer>
    </>
  );
};

export default Top;
