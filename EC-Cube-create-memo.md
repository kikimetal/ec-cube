# EC-Cube に新規ページ（ユーザー定義ページ）を追加する際の注意
散々悩まされたのでメモ

## まず普通に新規ページを作成する
管理画面 -> コンテンツ管理 -> ページ管理 -> 新規入力（最下部）

default_frame.twig を継承する
```
{% extends 'default_frame.twig' %}
{% block main %}
    <div>
        コンテンツ...
    </div>
{% endblock %}
```

## FrontControllerProvider を修正する
場所はソースファイルの
[Eccube-root]/src/Eccube/ControllerProvider/FrontControllerProvider.php

```php
class FrontControllerProvider implements ControllerProviderInterface
{
    public function connect(Application $app)
    {
    ...省略...

        // ↓コメントアウト
        // $c->match('/'.$app['config']['user_data_route'].'/{route}', '\Eccube\Controller\UserDataController::index')->assert('route', '[0-9a-zA-Z_]+')->bind('user_data');

        ...省略...

        // ↓追加
        $c->match('/'.'{route}', '\Eccube\Controller\UserDataController::index')->assert('route', '[0-9a-zA-Z_]+')->bind('user_data');

        return $c;
    }
}
```

## 独自ページへの、ページ内リンクでは以下を使う
```html
<a href="{{ url(app.config.user_data_route, {"route": "sample-page"}) }}">サンプルページ</a>
```
